import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import loader from "mini-css-extract-plugin/types/loader";
import { Icon } from "@mui/material";

export function buildLoaders({mode}: BuildOptions): ModuleOptions['rules'] {
    const isDev = mode === 'development'

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
    }

    const svgPlugin = {
        plugins: [
            {
                name: 'convertColors',
                params: {
                    currentColor: true
                }
            }
        ]
    }

    const svgrLoader = {
        test: /\.svg$/,
        use: [{
            loader: '@svgr/webpack',
            options: { 
                icon: true,
                svgPlugin
            }
        }]
    }

    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? `[path][name]__[local]` : `[hash:base64:8]`
            }
        }
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, 
            cssLoaderWithModules, 
            "sass-loader"
        ]
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    
    return [scssLoader, tsLoader, assetLoader, svgrLoader]
}