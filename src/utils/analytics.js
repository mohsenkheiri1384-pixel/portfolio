import api from '../api/axios'

export const trackVisit=(path)=>{
    api.post('track/',{path})
    .catch(err=>console.error('Tracking error:',err))
}

export const getStats=async()=>{
    try{
        const res=await api.get('stats/')
        return res.data
    } catch (err) {
        console.error('Stats error:',err)
        return {total_visits:0,today_visits:0}
    }
}
