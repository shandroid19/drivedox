import { createSlice,current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux"
export const fileSlice = createSlice({
    name:'files',
    initialState:{
        files:[],            //to store the rows
        user:"",
        selected:"" ,
        filesloading:"",
        contentloading:false,
        filesloading:false
    },
    reducers:{
        populate: (state,action)=>{
            state.files=action.payload
            // return{...state,files :action.payload} 
        },
        setuser: (state,action)=>{
            state.user=action.payload
            // return{...state,user :action.payload} 
        },
        setselected: (state,action)=>{
            state.selected=action.payload
            // return{...state,selected :action.payload} 
        },
        setcontentloading:(state)=>{
            return{...state, contentloading :true} 
        },
        setfilesloading:(state)=>{
            return{...state,filesloading :true} 
        },
        stopcontentloading:(state)=>{
            return{...state, contentloading :false} 
        },
        stopfilesloading:(state)=>{
            return{...state,filesloading :false} 
        }
        // apply: (state,action)=>{
        //     state.todelete = action.payload;
        // },

        // filldata: (state,action)=>{
        //     var temprows = action.payload;              // to store unformatted data 
        //     state.rows = temprows.map((row)=>{
        //         const options = { year: 'numeric', month: 'long', day: 'numeric' };         // options converting dates to required format
        //         row.date= new Date(row.date)
        //         row.date=row.date.toLocaleDateString(undefined,options)
        //         const req= row.requests
        //         const res = row.responses
        //         const impressions = row.impressions
        //         const clicks = row.clicks
        //         row.requests = row.requests.toLocaleString();                               
        //         row.responses = row.responses.toLocaleString();
        //         row.impressions = row.impressions.toLocaleString();
        //         row.clicks = row.clicks.toLocaleString();
        //         row.revenue = "$"+row.revenue?.toFixed(2).toString();
        //         row.fill_rate=(res*100/req).toFixed(2)
        //         row.ctr = (clicks*100/impressions).toFixed(2)
        //         return row;
        //     })
        //     state.rows=temprows      
        // }
    }
})

export const {populate,setuser,setselected,setcontentloading,setfilesloading,stopcontentloading,stopfilesloading} = fileSlice.actions;   //exporting all the actions 
export default fileSlice.reducer;