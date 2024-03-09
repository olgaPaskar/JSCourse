type ElementWithNumberValue = {
    value: number;
}
function  getMaxValue<T>(array: T[]): T | ElementWithNumberValue {
    return array.reduce((max, current) => {
        if (typeof current === 'number' || typeof current === 'string'){
            return current > max ? current: max;
        } else if (typeof  current === 'object' && 'value' in current) {
            return (current as ElementWithNumberValue).value > (max as ElementWithNumberValue). value
            ? current
                : max;
        }
    })

}