
const test = (value) => {
    if(value){
        console.log(value);
        document.querySelector('#inputbox').value = value;
    }
}

window.onload = function(){
    const keyword = document.querySelector('#inputbox');
    const keywords = document.querySelector('.auto');
    let activekey = -1;
    const addActive = (keywords_active) => {
        if(!keywords_active)
            return false;
        
            removeActive(keywords_active);
            if(activekey >= keywords_active.length)
                activekey = 0;
            if(activekey < 0 )
                activekey = (keywords_active.length -1);
            keywords_active[activekey].classList.add('auto-active');
    }
    
    const removeActive = (keywords_active) => {
        for( let i = 0; i < keywords_active.length; i++){
            keywords_active[i].classList.remove('auto-active');
        }
    }

    const closeSearch = (keywords, keywords_active) => {
        while(keywords.hasChildNodes())
        keywords.removeChild(keywords.firstChild);
    }

    keyword.addEventListener('keyup', (e) => {
        const {value} = e.target;
        const matched = arr.filter(x => x.match(value));
        console.log(matched);
        if(e.keyCode  !== 38 && e.keyCode  !== 40 && e.keyCode  !== 13){
            activekey = -1;
            keywords.innerHTML = matched.map(key => `<p class="autoline" onclick="test('${key}')"><a href="javascript:void(0);">${key}</a></p>`).join('');
        }
        const keywords_active = document.getElementsByClassName('autoline');
        console.log(activekey);
        if(e.keyCode === 40){
            console.log(keywords_active);
            if(keywords_active.length > 0){
                ++activekey;
                console.log(keywords_active);
                addActive(keywords_active);
            }            
        }else if(e.keyCode === 38){
            console.log(keywords_active);
            if(keywords_active.length > 0){
                --activekey;
                console.log(keywords_active);
                addActive(keywords_active);
            }
        } else if(e.keyCode === 13) {
            if(activekey > -1)
            keywords_active[activekey].click();
            closeSearch(keywords, keywords_active);
        }
    });

    
}


const arr = ['가나다라','가나다라마','가나다라마바','가나다라마바사','가나다라마바사아자','가나다라'];

