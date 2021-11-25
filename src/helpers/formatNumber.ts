const formatNumber = (number: string) => {
    const formater = new Intl.NumberFormat('en-us', { maximumFractionDigits: 0 })
    if (number) {
        const [integer, decimal] = number.split('.')
        const formatedInteger = formater.format(parseInt(integer))
        if (!decimal) return formatedInteger
        return `${formatedInteger}.${decimal}`
    }
}

export default formatNumber