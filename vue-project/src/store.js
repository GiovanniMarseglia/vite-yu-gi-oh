import { reactive } from "vue";


export const store = reactive({
        card:[],   
        url:"https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
        load:false,    
        type:[],        
});
