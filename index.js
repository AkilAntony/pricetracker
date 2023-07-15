const cheerio=require('cheerio');
const axios= require('axios');
 
async function getProductDetails(url){
    try{
        const response=await axios.get(url);
        const $=cheerio.load(response.data);
        const sellerName=$('#merchant-info > a:nth-child(2) > span').text();
        const productPrice=$('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span:nth-child(2) > span.a-price-whole').text();
        const productDetails=$('#productOverview_feature_div > div ').text();
       
 
        console.log('Seller Name, :' +sellerName);
        console.log('Details'+productDetails);
        console.log('Price :'+productPrice);
 
      
    }
    catch(error){
        console.error(error);
    }

}
getProductDetails('https://www.amazon.in/Lenovo-i5-11320H-400nits-Warranty-82NC00EWIN/dp/B0B56CVZVS/ref=mp_s_a_1_1_sspa?keywords=macbook+air+m1&qid=1689139316&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9waG9uZV9zZWFyY2hfYXRm&psc=1');   
