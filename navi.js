const naviData = [
    {
        d1 : '회사소개',
        d1link : 'company.html',
        d2 : [
            {
                d2text : 'CEO인사말',
                d2link : 'ceo.html' 
            },
            {
                d2text : '연혁',
                d2link : 'history.html' 
            },
            {
                d2text : '오시는길',
                d2link : 'location.html' 
            },

        ]
    },
    {
        d1 : '제품소개',
        d1link : 'product.html',
        d2 : [
            {
                d2text : '신제품',
                d2link : 'ceo.html' 
            },
            {
                d2text : '노마진',
                d2link : 'no.html' 
            }
        ]
    },
    {
        d1 : '고객센터',
        d1link : 'board.html',
        d2 : [

        ]
    }
]

window.onload=function(){
    let naviTag = '';

    for (let i in naviData){
    naviTag += `<li><a href='${naviData[i].d1link}'>${naviData[i].d1}</a><ul>`;
            for(let j in naviData[i].d2)
    naviTag += `<li><a href='${naviData[i].d2[j].d2link}'>${naviData[i].d2[j].d2text}</a></li>`
    naviTag += `</ul></li>`;
    }
    document.querySelector('#hd > ul').innerHTML = naviTag;
}

