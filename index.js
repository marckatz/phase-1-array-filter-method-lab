function findMatching(drivers, name){
    return drivers.filter(function(driver){
        return driver.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(drivers, nameStart){
    return drivers.filter(function(driver){
        return driver.slice(0,nameStart.length) === nameStart;
    });
}

function matchName(drivers, name){
    return drivers.filter(function(driver){
        return driver.name === name;
    });
}