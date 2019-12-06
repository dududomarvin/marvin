function nove(num) {
    x = num.toString()
    v = x.charAt(x.length-1)
    if(v === "9")
        return true
    else
        return false
}