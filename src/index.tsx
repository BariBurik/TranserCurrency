import App from "@/components/App/App"
import {createRoot} from 'react-dom/client'

const root = document.getElementById('root')

if(!root) {
    throw new Error('root not found')  
}


const container = createRoot(root)

container.render(
    <App/>
)