/*
* Source1 : https://www.dummies.com/education/math/statistics/how-to-calculate-percentiles-in-statistics/
*
*
* Common Rules :
*           1. Order all the values in the data set from smallest to largest
*
*           2. Multiply k percent by the total number of values, n.
*               [This number is called the index.]
*
*           3. If the index obtained in Step 2 is not a whole number, round it
*                up to the nearest whole number and go to Step 4a. If the index
*                obtained in Step 2 is a whole number, go to Step 4b.
*
*           4a. Count the values in your data set from left to right (from
*                the smallest to the largest value) until you reach the number
*                indicated by Step 3.
*                [The corresponding value in your data set is the kth percentile.]
*           4b. Count the values in your data set from left to
*              right until you reach the number indicated by Step 2.
*              [The kth percentile is the average of that corresponding
*              value in your data set and the value that directly follows it.]
*
* Extra Added:
*
*
*
*===========================================================================================================================
* Source: https://web.stanford.edu/class/archive/anthsci/anthsci192/anthsci192.1064/handouts/calculating%20percentiles.pdf
*
* NOTE:  Percentiles are very handy for exploring the distribution of number sets using various
*        EDA graphs, including the well-known (and still underused) box plot.
*        The meaning of percentile can be captured by stating that the pth percentile of a
*        distribution is a number such that approximately p percent (p%) of the values in the
*        distribution are equal to or less than that number. So, if ‘28’ is the 80th percentile of a
*        larger batch of numbers, 80% of those numbers are less than or equal to 28.
*        A percentile can be (1) calculated directly for values that actually exist in the distribution,
*        or (2) interpolated for values that don’t exist (but which you may want to use to plot
*        specific kinds of graphs).
*===========================================================================================================================
*
*
* */

// Percentile
function percentile(percentile, array){
    let result = 0;
    let data = array.sort();
    let index = (percentile/100) * data.length;
    if (Math.round(index) === index){
        result = (data[index-1] + data[index])/2;
    }else{
        result = data[Math.round(index)];
    }
    return result;
}

// Advance Percentile
function advPercentile(percentile, object){

}

//Exports
module.exports = {
    percentile:percentile,
    advPercentile:advPercentile
};