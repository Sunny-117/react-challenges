// @ts-nocheck

import React from "react";
import { Link } from "react-router-dom";
import routeConfig from "./routeConfig";

/**
 * 增强Link功能
 * @param {}} param0
 * @returns
 */
export default function BetterLink({ to, ...rest }) {
    if (to.name && typeof to !== "string") {
        //说明to={{name:''}}
        to.pathname = getPathFromName(to.name, "/", routeConfig); //根据name查找对应的path
        if (to.pathname === undefined) {
            //最终没有匹配上
            throw new Error(`name属性值${to.name}无效`);
        }
    }

    return <Link {...rest} to={to} />;
}

/**
 * 根据name的值，查找对应的path，没有考虑有params的情况
 * 如果有，会比较复杂，需要用到第三方库path-to-regexp
 * @param {*} name
 */
function getPathFromName(name, baseUrl, routesArr) {
    for (const item of routesArr) {
        let newPath = baseUrl + item.path;
        newPath = newPath.replace(/\/\//g, "/");
        if (item.name === name) {
            // 名字一样
            return newPath;
        } else {
            if (Array.isArray(item.children)) {
                //  名字不一样就 递归
                const path = getPathFromName(name, newPath, item.children);
                if (path !== undefined) {
                    //拿到了
                    return path;
                }
            }
        }
    }
}
