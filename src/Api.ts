import axios from 'axios'
import { error, success } from './utilities/toast'
const baseUrl = process.env.REACT_APP_SERVER_URL

export const resolve_url = (link: string) => {
	return new URL(link, baseUrl).href
}

export function getUrl(image: string) {
	try {
		new URL(image)
	} catch (_) {
		return resolve_url(`uploads/${image}`)
	}
	return image
}

function JSONtoHTML(article: any) {
    var totalMessages = Object.keys(article.blocks).length;
    let text='';

    for(var i=0;i<totalMessages;i++) {
        var type=article.blocks[i].type;
        if(type === 'paragraph') {
             text+='<p>';
             text+=article.blocks[i].data.text;
             text+='</p>';
        } else if(type === 'table') {
            text+='<table>';
            var Rows=article.blocks[i].data.content.length;
            for(var j=0;j<Rows;j++) {
                text+='<tr>';
                var Cols=article.blocks[i].data.content[j].length;
                for(var k=0;k<Cols;k++) {
                    text+='<td>';
                    text+=article.blocks[i].data.content[j][k];
                    text+='</td>';
                }
                text+='</tr>';
            }
            text+='</table>';
        } else if(type === 'list') {
            if(article.blocks[i].data.style === 'ordered') {
                text+='<ol>';
                var No=article.blocks[i].data.items.length;
                for(var t=0;t<No;t++) {
                    text+='<li>';
                    text+=article.blocks[i].data.items[t];
                    text+='</li>';
                }
                text+='</ol>';
            }
            else {
                text+='<ul>';
                var NO=article.blocks[i].data.items.length;
                for(var m=0;m<NO;m++) {
                    text+='<li>';
                    text+=article.blocks[i].data.items[m];
                    text+='</li>';
                }
                text+='</ul>';
            }
        } else if(type === 'header') {
            var p=article.blocks[i].data.level;
            text+='<h'+p+'>';
            text+=article.blocks[i].data.text;
            text+='</h'+p+'>';
        } else if(type === 'checklist') {
            var len=article.blocks[i].data.items.length;
            for(var e=0;e<len;e++) {
                var temp='a'+e;
                text+='<input type=\'checkbox\'';
                text+=' id='+temp+' name='+temp;
                text+='>';
                text+='<label for='+temp+'>';
                text+=article.blocks[i].data.items[e].text;
                text+='</label>';
            }
        }
    }
    return text;
}

export class Api {
    static publishArticle(article: any, title: string, tags: string[], hashnodeToken: string, mediumToken: string, devtoToken: string) {
        var HTMLarticle = JSONtoHTML(article)
        var url = baseUrl + 'post?'
        url += hashnodeToken ? `&hashnode=True&hashnodeToken=${hashnodeToken}` : `hashnode=$False`
        url += mediumToken ? `&medium=True&mediumToken=${mediumToken}` : `medium=$False`
        url += devtoToken ? `&devto=True&devtoToken=${devtoToken}` : `devto=$False`
        try {
            return (
                axios.post(url, {
                    title: title,
                    contentFormat: 'html',
                    content: HTMLarticle,
                    jsonContent: article,
                    tags: tags,
                    publishStatus: 'public'
                })
                .then((res) => {
                    if(res.status === 200) {
                        success('Article published')
                        return true
                    }
                    return false
                })
                .catch((err) => {
                    error('Error publishing article')
                    return false
                })
            )
        } catch (err) {
            error('Error publishing article')
            return false
        }
    }

    private static handleError(err: any, msg: string = '') {
		console.error(err)
		if (err.response) {
			console.error(err?.response?.data)
			console.error(err?.response?.status)
		}
		throw new Error(msg)
	}
}