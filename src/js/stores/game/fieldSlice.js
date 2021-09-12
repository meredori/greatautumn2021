import { createSlice } from '@reduxjs/toolkit'

export const fieldSlice = createSlice({
    name: 'fields',
    initialState: {
      fields: [
        {id:0, active:true, growing:false, growthPercent:0, cropType:''},
        {id:1, active:false, growing:false, growthPercent:0, cropType:''},
        {id:2, active:false, growing:false, growthPercent:0, cropType:''},
        {id:3, active:false, growing:false, growthPercent:0, cropType:''},
        {id:4, active:false, growing:false, growthPercent:0, cropType:''},
        {id:5, active:false, growing:false, growthPercent:0, cropType:''},
        {id:6, active:false, growing:false, growthPercent:0, cropType:''},
        {id:7, active:false, growing:false, growthPercent:0, cropType:''},
        {id:8, active:false, growing:false, growthPercent:0, cropType:''},
        {id:9, active:false, growing:false, growthPercent:0, cropType:''},
        {id:10, active:false, growing:false, growthPercent:0, cropType:''},
        {id:11, active:false, growing:false, growthPercent:0, cropType:''},
        {id:12, active:false, growing:false, growthPercent:0, cropType:''},
        {id:13, active:false, growing:false, growthPercent:0, cropType:''},
        {id:14, active:false, growing:false, growthPercent:0, cropType:''},
        {id:15, active:false, growing:false, growthPercent:0, cropType:''},
        {id:16, active:false, growing:false, growthPercent:0, cropType:''},
        {id:17, active:false, growing:false, growthPercent:0, cropType:''},
        {id:18, active:false, growing:false, growthPercent:0, cropType:''},
        {id:19, active:false, growing:false, growthPercent:0, cropType:''},
        {id:20, active:false, growing:false, growthPercent:0, cropType:''},
        {id:21, active:false, growing:false, growthPercent:0, cropType:''},
        {id:22, active:false, growing:false, growthPercent:0, cropType:''},
        {id:23, active:false, growing:false, growthPercent:0, cropType:''},
        {id:24, active:false, growing:false, growthPercent:0, cropType:''},
        {id:25, active:false, growing:false, growthPercent:0, cropType:''},
        {id:26, active:false, growing:false, growthPercent:0, cropType:''},
        {id:27, active:false, growing:false, growthPercent:0, cropType:''},
        {id:28, active:false, growing:false, growthPercent:0, cropType:''},
        {id:29, active:false, growing:false, growthPercent:0, cropType:''},
        {id:30, active:false, growing:false, growthPercent:0, cropType:''},
        {id:31, active:false, growing:false, growthPercent:0, cropType:''},
        {id:32, active:false, growing:false, growthPercent:0, cropType:''},
        {id:33, active:false, growing:false, growthPercent:0, cropType:''},
        {id:34, active:false, growing:false, growthPercent:0, cropType:''},
        {id:35, active:false, growing:false, growthPercent:0, cropType:''},
        {id:36, active:false, growing:false, growthPercent:0, cropType:''},
        {id:37, active:false, growing:false, growthPercent:0, cropType:''},
        {id:38, active:false, growing:false, growthPercent:0, cropType:''},
        {id:39, active:false, growing:false, growthPercent:0, cropType:''},
        {id:40, active:false, growing:false, growthPercent:0, cropType:''},
        {id:41, active:false, growing:false, growthPercent:0, cropType:''},
        {id:42, active:false, growing:false, growthPercent:0, cropType:''},
        {id:43, active:false, growing:false, growthPercent:0, cropType:''},
        {id:44, active:false, growing:false, growthPercent:0, cropType:''},
        {id:45, active:false, growing:false, growthPercent:0, cropType:''},
        {id:46, active:false, growing:false, growthPercent:0, cropType:''},
        {id:47, active:false, growing:false, growthPercent:0, cropType:''},
        {id:48, active:false, growing:false, growthPercent:0, cropType:''},
        {id:49, active:false, growing:false, growthPercent:0, cropType:''},
        {id:50, active:false, growing:false, growthPercent:0, cropType:''},
        {id:51, active:false, growing:false, growthPercent:0, cropType:''},
        {id:52, active:false, growing:false, growthPercent:0, cropType:''},
        {id:53, active:false, growing:false, growthPercent:0, cropType:''},
        {id:54, active:false, growing:false, growthPercent:0, cropType:''},
        {id:55, active:false, growing:false, growthPercent:0, cropType:''},
        {id:56, active:false, growing:false, growthPercent:0, cropType:''},
        {id:57, active:false, growing:false, growthPercent:0, cropType:''},
        {id:58, active:false, growing:false, growthPercent:0, cropType:''},
        {id:59, active:false, growing:false, growthPercent:0, cropType:''},
        {id:60, active:false, growing:false, growthPercent:0, cropType:''},
        {id:61, active:false, growing:false, growthPercent:0, cropType:''},
        {id:62, active:false, growing:false, growthPercent:0, cropType:''},
        {id:63, active:false, growing:false, growthPercent:0, cropType:''}
      ],
    },
    reducers: {
      activateNew: (state) => {
        var index = state.fields.findIndex(e => !e.active);
        state.fields[index].active = true;
      },
      growCrop: (state, action) => {
          console.log(action);
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { activateNew, growCrop } = fieldSlice.actions
  
  export default fieldSlice.reducer