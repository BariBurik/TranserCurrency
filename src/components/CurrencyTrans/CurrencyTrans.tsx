import { observer } from "mobx-react-lite";
import { Input } from "../UI/Input";
import currency from '@/store/currency'
import classes from './CurrencyTrans.module.scss'

const CurrencyTrans = observer(() => {

    const USDValue = currency.USDValue
    const EURValue = currency.EURValue
    const setUSDValue = currency.setUSDValue
    const setEURValue = currency.setEURValue

    console.log(USDValue, EURValue)

    return ( 
        <div className={classes.container}>
            <div className={classes.content}>
                <h3>USD</h3>
                <Input value={USDValue} 
                       onChange={(value) => setUSDValue(value)}/>
            </div>
            <div className={classes.content}>
                <h3>EUR</h3>
                <Input value={EURValue} 
                       onChange={(value) => setEURValue(value)}/>
            </div>
        </div>
    );
})

export default CurrencyTrans;