"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_basekit_server_api_1 = require("@lark-opdev/block-basekit-server-api");
const { t } = block_basekit_server_api_1.field;
// 配置允许的服务商域名
const allowedDomains = [
    'api.deepseek.com',
    'ark.cn-beijing.volces.com',
    'api.siliconflow.cn',
    'dashscope.aliyuncs.com',
    'api.hunyuan.cloud.tencent.com',
    'api.lkeap.cloud.tencent.com',
    'openrouter.ai'
];
// 添加服务商域名到白名单
block_basekit_server_api_1.basekit.addDomainList(allowedDomains);
block_basekit_server_api_1.basekit.addField({
    // 定义多语言支持
    i18n: {
        messages: {
            'zh-CN': {
                'providerLabel': '服务提供商',
                'providerDeepseek': 'DeepSeek 官方',
                'providerVolc': '火山方舟',
                'providerSilicon': '硅基流动',
                'providerAli': '阿里云',
                'providerTencent': '腾讯混元',
                'providerTencentCloud': '腾讯云',
                'providerOpenRouter': 'OpenRouter',
                'apiKeyLabel': '服务商 API Key',
                'apiKeyPlaceholder': '请输入您的服务商 API Key',
                'modelLabel': '模型',
                'modelNote': '(仅DeepSeek官方可用)',
                'inputFieldLabel': '输入字段',
                'promptLabel': '自定义指令',
                'promptPlaceholder': '请输入指令',
                'apiKeyTip': '请参考说明文档获取 DeepSeek API：',
                'apiKeyDoc': '说明文档',
                'errorAuthFailed': 'API Key 无效或已过期',
                'errorRateLimit': '请求过于频繁，请稍后再试',
                'errorApiRequest': '服务请求失败，请稍后重试',
                'errorInvalidFormat': 'API 返回格式异常',
                'errorUnknown': '服务异常，请稍后重试',
                'modelCustomLabel': '自定义模型',
                'modelCustomPlaceholder': '请输入模型名称',
            },
            'en-US': {
                'providerLabel': 'Service Provider',
                'providerDeepseek': 'DeepSeek Official',
                'providerVolc': 'Volcano Engine',
                'providerSilicon': 'Silicon Flow',
                'providerAli': 'Alibaba Cloud',
                'providerTencent': 'Tencent Hunyuan',
                'providerTencentCloud': 'Tencent Cloud',
                'providerOpenRouter': 'OpenRouter',
                'apiKeyLabel': 'Provider API Key',
                'apiKeyPlaceholder': 'Please enter your provider API Key',
                'modelLabel': 'Model',
                'modelNote': '(DeepSeek only)',
                'inputFieldLabel': 'Input Field',
                'promptLabel': 'Custom Prompt',
                'promptPlaceholder': 'Please enter prompt',
                'apiKeyTip': 'Please refer to the documentation to get DeepSeek API:',
                'apiKeyDoc': 'Documentation',
                'errorAuthFailed': 'Invalid or expired API Key',
                'errorRateLimit': 'Too many requests, please try again later',
                'errorApiRequest': 'Service request failed, please try again later',
                'errorInvalidFormat': 'API response format error',
                'errorUnknown': 'Service error, please try again later',
            },
            'ja-JP': {
                'providerLabel': 'サービスプロバイダー',
                'providerDeepseek': 'DeepSeek 公式',
                'providerVolc': '火山エンジン',
                'providerSilicon': 'シリコンフロー',
                'providerAli': 'アリババクラウド',
                'providerTencent': '腾讯混元',
                'providerTencentCloud': '腾讯クラウド',
                'providerOpenRouter': 'OpenRouter',
                'apiKeyLabel': 'プロバイダー API Key',
                'apiKeyPlaceholder': 'プロバイダーの API Keyを入力してください',
                'modelLabel': 'モデル',
                'modelNote': '(DeepSeek公式のみ)',
                'inputFieldLabel': '入力フィールド',
                'promptLabel': 'カスタム指示',
                'promptPlaceholder': '指示を入力してください',
                'apiKeyTip': 'DeepSeek APIの取得については、ドキュメントを参照してください：',
                'apiKeyDoc': 'ドキュメント',
                'errorAuthFailed': 'APIキーが無効または期限切れです',
                'errorRateLimit': 'リクエストが多すぎます。後でもう一度お試しください',
                'errorApiRequest': 'サービスリクエストが失敗しました。後でもう一度お試しください',
                'errorInvalidFormat': 'APIレスポンスのフォーマットエラー',
                'errorUnknown': 'サービスエラー。後でもう一度お試しください',
                'modelCustomLabel': 'カスタムモデル',
                'modelCustomPlaceholder': 'モデル名を入力してください',
            }
        }
    },
    formItems: [
        {
            key: 'prompt',
            label: t('promptLabel'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: t('promptPlaceholder'),
                type: 'textarea',
            },
            validator: {
                required: true,
            },
        },
    ],
    // 定义返回结果类型为文本
    resultType: {
        type: block_basekit_server_api_1.FieldType.Text, // 定义捷径的返回结果类型为多行文本字段
    },
    // 执行函数
    execute: async (formItemParams, context) => {
        // 定义固定的 apiKey
        const apiKey = 'sk-04271c044cde4f6bbef91ab316b0dbd6';
        const model = 'deepseek-r1';
        const provider = 'ali';
        const { customModel, prompt } = formItemParams;
        const { fetch } = context;
        try {
            const apiEndpoints = {
                deepseek: 'https://api.deepseek.com/v1/chat/completions',
                volc: 'https://ark.cn-beijing.volces.com/api/v3/chat/completions',
                silicon: 'https://api.siliconflow.cn/v1/chat/completions',
                ali: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
                tencent: 'https://api.hunyuan.cloud.tencent.com/v1/chat/completions',
                tencentCloud: 'https://api.lkeap.cloud.tencent.com/v1/chat/completions',
                openRouter: 'https://openrouter.ai/api/v1/chat/completions'
            };
            // 修改这行，移除 customUrl 相关逻辑
            const apiUrl = apiEndpoints[provider];
            const isReasonerModel = (customModel || model) === 'deepseek-r1';
            const requestBody = {
                model: customModel || model,
                messages: [
                    {
                        role: 'user',
                        content: isReasonerModel ? `${prompt}\n` : prompt
                    }
                ],
                stream: false,
                temperature: isReasonerModel ? 0 : undefined
            };
            if (!isReasonerModel) {
                requestBody.messages.unshift({ role: 'system', content: prompt });
            }
            console.log('Request Body:', JSON.stringify(requestBody, null, 2));
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify(requestBody)
            });
            if (!response.ok) {
                const errorText = await response.text();
                console.log('Error Response:', {
                    status: response.status,
                    headers: Object.fromEntries(response.headers.entries()),
                    body: errorText
                });
                if (response.status === 401) {
                    return {
                        code: block_basekit_server_api_1.FieldCode.AuthorizationError,
                        message: t('errorAuthFailed'),
                        msg: `===捷径代码主动返回错误: API认证失败 ${response.status} ${errorText}`,
                    };
                }
                else if (response.status === 429) {
                    return {
                        code: block_basekit_server_api_1.FieldCode.RateLimit,
                        message: t('errorRateLimit'),
                        msg: `===捷径代码主动返回错误: 触发限流 ${response.status} ${errorText}`,
                    };
                }
                return {
                    code: block_basekit_server_api_1.FieldCode.Error,
                    message: t('errorApiRequest'),
                    msg: `===捷径代码主动返回错误: API请求失败 ${response.status} ${errorText}`,
                };
            }
            let data;
            try {
                const responseText = await response.text();
                console.log('API Response Text:', responseText);
                if (!responseText) {
                    return {
                        code: block_basekit_server_api_1.FieldCode.Success,
                        data: "AI分析内容为空，请修改提示词重试～",
                        msg: "结果异常！"
                    };
                }
                data = JSON.parse(responseText);
            }
            catch (error) {
                console.log("🚀 ~ execute: ~ response解析错误:", error);
                return {
                    code: block_basekit_server_api_1.FieldCode.Success,
                    data: "AI分析内容为空，请修改提示词重试～",
                    msg: "结果异常！"
                };
            }
            // 检查API返回的错误码
            if (data.error) {
                console.log("🚀 ~ execute: ~ API返回错误:", data.error);
                if (data.error.code === 'rate_limit_exceeded' || data.error.type === 'rate_limit_exceeded') {
                    return {
                        code: block_basekit_server_api_1.FieldCode.RateLimit,
                        msg: "超过API调用QPS限制"
                    };
                }
                else if (data.error.code === 'insufficient_quota' || data.error.type === 'insufficient_quota') {
                    return {
                        code: block_basekit_server_api_1.FieldCode.QuotaExhausted,
                        msg: "quota耗尽"
                    };
                }
                else if (data.error.code === 'invalid_api_key' || data.error.type === 'invalid_api_key') {
                    return {
                        code: block_basekit_server_api_1.FieldCode.AuthorizationError,
                        msg: "服务未开通或API Key无效"
                    };
                }
                else {
                    return {
                        code: block_basekit_server_api_1.FieldCode.InvalidArgument,
                        msg: "输入参数错误"
                    };
                }
            }
            if (!data.choices?.[0]?.message?.content) {
                return {
                    code: block_basekit_server_api_1.FieldCode.Success,
                    data: "AI分析内容为空，请修改提示词重试～",
                    msg: "结果异常！"
                };
            }
            return {
                code: block_basekit_server_api_1.FieldCode.Success,
                data: data.choices[0].message.content.trim(),
            };
        }
        catch (error) {
            console.log("🚀 ~ execute: ~ 整体执行错误:", error);
            return {
                code: block_basekit_server_api_1.FieldCode.Success,
                data: "AI服务异常，请稍后重试～",
                msg: "服务异常！"
            };
        }
    },
});
exports.default = block_basekit_server_api_1.basekit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRkFBNEc7QUFDNUcsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLGdDQUFLLENBQUM7QUFFcEIsYUFBYTtBQUNiLE1BQU0sY0FBYyxHQUFHO0lBQ3JCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLGVBQWU7Q0FDaEIsQ0FBQztBQUVGLGNBQWM7QUFDZCxrQ0FBTyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUV0QyxrQ0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNmLFVBQVU7SUFDVixJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsZUFBZSxFQUFFLE9BQU87Z0JBQ3hCLGtCQUFrQixFQUFFLGFBQWE7Z0JBQ2pDLGNBQWMsRUFBRSxNQUFNO2dCQUN0QixpQkFBaUIsRUFBRSxNQUFNO2dCQUN6QixhQUFhLEVBQUUsS0FBSztnQkFDcEIsaUJBQWlCLEVBQUUsTUFBTTtnQkFDekIsc0JBQXNCLEVBQUUsS0FBSztnQkFDN0Isb0JBQW9CLEVBQUUsWUFBWTtnQkFDbEMsYUFBYSxFQUFFLGFBQWE7Z0JBQzVCLG1CQUFtQixFQUFFLGtCQUFrQjtnQkFDdkMsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFdBQVcsRUFBRSxpQkFBaUI7Z0JBQzlCLGlCQUFpQixFQUFFLE1BQU07Z0JBQ3pCLGFBQWEsRUFBRSxPQUFPO2dCQUN0QixtQkFBbUIsRUFBRSxPQUFPO2dCQUM1QixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxXQUFXLEVBQUUsTUFBTTtnQkFDbkIsaUJBQWlCLEVBQUUsZ0JBQWdCO2dCQUNuQyxnQkFBZ0IsRUFBRSxjQUFjO2dCQUNoQyxpQkFBaUIsRUFBRSxjQUFjO2dCQUNq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