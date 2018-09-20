const vfilter={
    formatNumber:function(numb){
        let num=new Number(numb);
        if((num/100000)>1){
            if((num/100000000)>1){
                let yi=(num/100000000).toFixed(1);
                return yi+'亿'
            }
            else{ 
                let tenW=(num/10000).toFixed(1);
                return tenW+'万'
            }
           
        }
        else{
            return num.toFixed(0);
        }
    },
    formatSong:function(song){
        let arr=song.artists;
        let str='';
        const TITLE_MAX_LENGTH=45;
        arr.forEach((item,index)=>{
            if(index==0){str=str+item.name}
            else{str=str+'/'+item.name}
        })
        let strZ=str+'-'+song.name;
        if(strZ.length>TITLE_MAX_LENGTH)
        {
            return strZ.substring(0,TITLE_MAX_LENGTH)+"..";
        }
        return strZ;
    },
    formatHotSong:function(item){
        let arr=item.ar;
        let str='';
        const TITLE_MAX_LENGTH=45;
        arr.forEach((item,index)=>{
            if(index==0){str=str+item.name}
            else{str=str+'/'+item.name}
        })
        let strZ=str+'-'+item.al.name
        if(strZ.length>TITLE_MAX_LENGTH)
        {
            return strZ.substring(0,TITLE_MAX_LENGTH)+"..";
        }
        return strZ;
    },
    formatSearchSong:function(item){
        let arr=item.artists;
        let str='';
        const TITLE_MAX_LENGTH=25;
        arr.forEach((item,index)=>{
            if(index==0){str=str+item.name}
            else{str=str+'/'+item.name}
        })
        let strZ=str+'-'+item.album.name
        if(strZ.length>TITLE_MAX_LENGTH)
        {
            return strZ.substring(0,TITLE_MAX_LENGTH)+"..";
        }
        return strZ;
    },
    formatPlaysongs:function(item){
        let arr=item.ar;
        let str='';
        const TITLE_MAX_LENGTH=25;
        arr.forEach((item,index)=>{
            if(index==0){str=str+item.name}
            else{str=str+'/'+item.name}
        })
        let strZ=str+'-'+item.al.name
        if(strZ.length>TITLE_MAX_LENGTH)
        {
            return strZ.substring(0,TITLE_MAX_LENGTH)+"..";
        }
        return strZ;
    },
    toLong:function(str,MAX_LENGTH) {
        let strZ=str;
        if(strZ.length>MAX_LENGTH){
            return strZ.substring(0,MAX_LENGTH)+"..";
        }
        return strZ;
    },
    toZero:function(num){
        if(num<10)
        {
            return '0'+num;
        }
        else{return num}    
    },
    formatBr:function(str){
        let strZ=str.replace(/\n/g,'<br>');
        return strZ
    },
    playMusicArName:function(item){;
        if(item.ar!=undefined)
        {
            return item.ar[0].name;
        }
        if(item.artists!=undefined)
        {
            return item.artists[0].name;
        }
    }
}
export default vfilter;