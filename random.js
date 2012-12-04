function randomPrice(seed, volatility) {
    var r = Math.random();
    var change_percent = 2 * volatility * r;
    if (change_percent > volatility) {
        change_percent -= (2 * volatility);
    }
    change_amount = seed * change_percent;
    return seed + change_amount;
}

function generateData(){
    var today = new Date(),
    // before = today.add(Date.DAY, -200),
    before = Ext.Date.add(today, Ext.Date.DAY, -200)
    data = [{
        date: before,
        open: 10000,
    }],
    i, currentDate = before;

    for (var i = 1; i < 200; i++) {
        data.push({
            // date: (currentDate = currentDate.add(Date.DAY, 1)),
            date: (currentDate = Ext.Date.add(currentDate, Ext.Date.DAY, 1)),
            open: data[i - 1].open + ((Math.floor(Math.random() * 2) % 2) ? -1 : 1) * Math.floor(Math.random() * 7)
        });
    }
    return data;
}
