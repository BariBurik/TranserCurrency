import { makeAutoObservable, computed } from "mobx"


class Currency {
    private _EURValue: number = 0
    private _USDValue: number = 0
    private _ExcRate = 1.07

    constructor() {
        makeAutoObservable(this)
    }

    setUSDValue = (newValue: number) => {
        this._USDValue = newValue
        this._EURValue = newValue / this.ExcRate
    }

    setEURValue = (newValue: number) => {
        this._EURValue = newValue
        this._USDValue = newValue * this.ExcRate
    }
    
    get USDValue() {
        return this._USDValue
    }

    get EURValue() {
        return this._EURValue
    }

    get ExcRate() {
        return this._ExcRate
    }
}

export default new Currency