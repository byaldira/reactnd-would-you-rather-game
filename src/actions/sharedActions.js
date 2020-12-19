
import { showLoading , hideLoading } from 'react-redux-loading'
import { getAllKullanicilar } from './kullanicilarActions'
import { getAllSorular } from './sorularActions'
import { getInitialAppData} from '../utils/api'

export function handleAppInitialData()
{
    // Bu fonksiyon uygulama ilk çalıştığında tetiklenecektir. 
    // Redux'dan tüm datayı state'e atmak için çalışıtırılır.
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialAppData()
        .then(({users , sorular})=>{
                    // Get all data artık elimde kullanıcılar ve cevaplari var, burada store'a at 
                    dispatch(getAllKullanicilar(users)) // Bu kullanicilari alır
                    //dispatch(getAllSorular(sorular)) // soruları alır 
                    // Kaldı geriye cevapsız sorular :) 

                    // when finished hide loding panel
                    dispatch(hideLoading())
               })
    }
}