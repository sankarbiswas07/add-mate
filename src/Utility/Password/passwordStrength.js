function scorePassword(pass){
    let score = 0;
    if (!pass)
        return score;

    // award every unique letter until 5 repetitions
    let letters = new Object();
    for (let i=0; i<pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    let variations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass),
    };

    let variationCount = 0;
    for (let check in variations) {
        variationCount += (variations[check] === true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;

    return parseInt(score);
}

function pwdStrength(pass){
    let score = this.scorePassword(pass);

    if (score >= 100)
        return {slab:"strongest", score:100};
    if (score >= 95)
        return {slab:"stronger", score:score};
    if (score > 80)
        return {slab:"strong", score:score};
    if (score > 60)
        return {slab:"good", score:score};
    if (score >= 30)
        return {slab:"weak", score:score};
    if (score < 30)
        return {slab:"not recommended", score:score};

    return "";
}

module.exports = {
    pwdStrength : pwdStrength
};