import mempoolJS from "@mempool/mempool.js";

export const getFastestFee = () => {
    const { bitcoin: { fees } } = mempoolJS({
        hostname: 'mempool.space'
    });

    return fees.getFeesRecommended().then(feesRecommended => {
        //console.log("fastest fee from mempool", feesRecommended.fastestFee);
        return feesRecommended.fastestFee; // Return the fastestFee value
    }).catch(error => {
        // handle error
        console.error(error);
        return 10; // or however you wish to handle the error case
    });
};

(async () => {
    const fastestFee = await getFastestFee();
    console.log(fastestFee); // This will log the value of fastestFee
})();