import { get } from '../config'

/**
 * 根据注册地区聚合查询转移量
 * @returns 
 */
export const getGroupTransferQuantitySummaryByRegisterRegion = () => {
    return get("/groupTransferQuantitySummaryByRegisterRegion")
}

/**
 * 根据日期统计派单信息
 * @returns 
 */
export const getCountAssignOrderInfoByDateRange = (params) => {
    return get("/countAssignOrderInfoByDateRange", params)
}


/**
 * 根据日期查询派单产废企业信息
 * @param {*} params 
 * @returns 
 */
export const getQueryAssignOrderPwInfoByDateRange = (params) => {
    return get("/queryAssignOrderPwInfoByDateRange", params)
}