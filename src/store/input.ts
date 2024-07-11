import { computed, action, makeAutoObservable, observable } from "mobx"


class InputStore {
    private _text: number = 0
    private _isHide: boolean = true

    constructor() {
        makeAutoObservable(this);
    }
    setText = (newValue: number) => {
        this._text = newValue
    }
    
    setIsHide = (newValue: boolean) => {
        this._isHide = newValue
    }
    
    get text() {
        return this._text
    }

    get isHide() {
        return this._isHide
    }
}

export default new InputStore()