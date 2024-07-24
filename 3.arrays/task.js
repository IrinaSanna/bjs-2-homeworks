function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    } 
    return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    const filterGender = users.filter((users) => users.gender === gender);
    
    if (filterGender.length === 0) {
        return 0;
    }

    const avarageValue = filterGender.reduce((sum, user) => sum + user.age, 0) / filterGender.length;
    return avarageValue;
}