import { FC, useEffect, useRef, useState } from 'react';
import classes from './Input.module.scss'
import { observer } from 'mobx-react-lite';

interface InputProps {
    onChange?: (value: number) => void;
    value?: number
}

const Input: FC<InputProps> = observer(({onChange, value}) => {
    const [isHide, setIsHide] = useState<boolean>(true)
    const dangerTextRef = useRef<HTMLHeadingElement | null>(null);

    function isNumber(value: any): boolean {
        return !Number.isNaN(Number(value));
    }

    useEffect(() => {
        if (dangerTextRef.current && !isHide) {
            dangerTextRef.current.classList.remove(classes.hide);
        } else if (dangerTextRef.current && isHide) {
            dangerTextRef.current.classList.add(classes.hide);
        }
    }, [isHide]);

    const handleInputChange = (e: any) => {
        let inputValue = e.target.value
        if (!inputValue) {
            setIsHide(true)
            return 0;
        }
        if (isNumber(inputValue)) {
            setIsHide(true)
            if (onChange) {
                onChange(Number(inputValue))
            }
        } else {
            setIsHide(false)
        }
    };

    return ( 
        <div>
            <input value={value} className={classes.input} onChange={handleInputChange} type="text"/>
            <h4 ref={dangerTextRef} className={classes.dangerText}>Можно ввести только число</h4>
        </div>
    );
})

export default Input;