function nullZero() {
    var nullComparison = document.createElement('div');
    nullComparison.innerHTML = ' <div> (null == 0) ' + (null == 0);
    nullComparison.innerHTML += '</div> <div> (null === 0) ' + (null === 0);
    nullComparison.innerHTML += '</div> <div>  (null != 0) ' + (null != 0);
    nullComparison.innerHTML += '</div> <div>  (null !== 0) ' + (null !== 0);
    nullComparison.innerHTML += '</div> <div>  (null > 0) ' + (null > 0);
    nullComparison.innerHTML += '</div> <div>  (null < 0) ' + (null < 0);
    return nullComparison.innerHTML;


}

formArea[3].innerHTML = nullZero();