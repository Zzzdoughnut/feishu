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
    'openrouter.ai',
    'internal-api-drive-stream.feishu.cn'
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
        // {
        //   key: 'provider',
        //   label: t('providerLabel'),
        //   component: FieldComponent.SingleSelect,
        //   props: {
        //     options: [
        //       { label: t('providerVolc'), value: 'volc' },
        //     ],
        //     defaultValue: 'deepseek',
        //   },
        //   validator: {
        //     required: false,
        //   },
        // },
        // 删除整个 customUrl 表单项
        // {
        //   key: 'customUrl',
        //   label: t('customUrlLabel'),
        //   component: FieldComponent.Input,
        //   props: {
        //     placeholder: t('customUrlPlaceholder'),
        //     type: 'text',
        //   },
        //   validator: {
        //     required: false,
        //   },
        // },
        // {
        //   key: 'apiKey',
        //   label: t('apiKeyLabel'),
        //   component: FieldComponent.Input,
        //   props: {
        //     placeholder: t('apiKeyPlaceholder'),
        //   },
        //   tooltips: [
        //     {
        //       type: 'text',
        //       content: t('apiKeyTip')
        //     },
        //     {
        //       type: 'link',
        //       text: t('apiKeyDoc'),
        //       link: 'https://bytedance.larkoffice.com/docx/XvICd2i9woXlGOxp9xBcAmyNnXd'
        //     }
        //   ],
        //   validator: {
        //     required: true,
        //   },
        // },
        // {
        //   key: 'model',
        //   label: `${t('modelLabel')} ${t('modelNote')}`,
        //   component: FieldComponent.SingleSelect,
        //   props: {
        //     options: [
        //       { label: 'deepseek-chat', value: 'deepseek-chat' },
        //       { label: 'deepseek-reasoner', value: 'deepseek-reasoner' },
        //     ],
        //     defaultValue: 'deepseek-chat',
        //   },
        //   validator: {
        //     required: true,
        //   },
        // },
        // {
        //   key: 'customModel',
        //   label: t('modelCustomLabel'),
        //   component: FieldComponent.Input,
        //   props: {
        //     placeholder: t('modelCustomPlaceholder'),
        //     type: 'text',
        //   },
        //   validator: {
        //     required: false,
        //   },
        // },
        {
            key: 'inputField',
            label: t('inputFieldLabel'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                type: 'text',
                placeholder: '请输入图片URL，多个URL请用英文逗号分隔'
            },
            validator: {
                required: true,
            },
        },
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
        type: block_basekit_server_api_1.FieldType.Text, // 保持返回类型为文本，因为我们仍然返回AI分析结果
    },
    // 执行函数
    execute: async (formItemParams, context) => {
        const apiKey = 'sk-31504eb91c7a4d0691be8a6ee59ec6d8';
        const model = 'qwen-vl-max-2025-04-08';
        const provider = 'ali';
        const { prompt, inputField } = formItemParams;
        const { fetch } = context;
        try {
            // 处理输入的URL字符串,转换为数组
            const urls = inputField
                .split(',')
                .map(url => url.trim())
                .map(url => {
                // 只有当不是以http开头且包含'-'时才进行转换
                if (!url.startsWith('http') && url.includes('-')) {
                    // 替换所有的'-'为'/'
                    const formattedUrl = url.replace(/-/g, '/');
                    // 添加OSS域名前缀
                    return `https://jlb-prd.oss-cn-guangzhou.aliyuncs.com/file/jianlibao/${formattedUrl}`;
                }
                return url;
            })
                .filter(url => url); // 过滤掉空值
            if (urls.length === 0) {
                return {
                    code: block_basekit_server_api_1.FieldCode.Success,
                    data: '',
                };
            }
            console.log('转换后的URLs:', urls); // 添加日志以便调试
            // 构建消息内容
            const messageContent = [
                {
                    type: 'text',
                    text: prompt
                }
            ];
            // 添加所有图片URL，并为每个URL添加序号
            urls.forEach((url, index) => {
                messageContent.push({
                    type: 'text',
                    text: `url${index > 0 ? (index + 1) : ''}: `
                });
                messageContent.push({
                    type: 'image_url',
                    image_url: { url }
                });
            });
            const requestBody = {
                model,
                messages: [
                    {
                        role: 'user',
                        content: messageContent
                    }
                ],
                stream: false
            };
            const apiEndpoints = {
                deepseek: 'https://api.deepseek.com/v1/chat/completions',
                volc: 'https://ark.cn-beijing.volces.com/api/v3/chat/completions',
                silicon: 'https://api.siliconflow.cn/v1/chat/completions',
                ali: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
                tencent: 'https://api.hunyuan.cloud.tencent.com/v1/chat/completions',
                tencentCloud: 'https://api.lkeap.cloud.tencent.com/v1/chat/completions',
                openRouter: 'https://openrouter.ai/api/v1/chat/completions'
            };
            const apiUrl = apiEndpoints[provider];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRkFBNEc7QUFDNUcsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLGdDQUFLLENBQUM7QUFFcEIsYUFBYTtBQUNiLE1BQU0sY0FBYyxHQUFHO0lBQ3JCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixxQ0FBcUM7Q0FDdEMsQ0FBQztBQUVGLGNBQWM7QUFDZCxrQ0FBTyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUV0QyxrQ0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNmLFVBQVU7SUFDVixJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsZUFBZSxFQUFFLE9BQU87Z0JBQ3hCLGtCQUFrQixFQUFFLGFBQWE7Z0JBQ2pDLGNBQWMsRUFBRSxNQUFNO2dCQUN0QixpQkFBaUIsRUFBRSxNQUFNO2dCQUN6QixhQUFhLEVBQUUsS0FBSztnQkFDcEIsaUJBQWlCLEVBQUUsTUFBTTtnQkFDekIsc0JBQXNCLEVBQUUsS0FBSztnQkFDN0Isb0JBQW9CLEVBQUUsWUFBWTtnQkFDbEMsYUFBYSxFQUFFLGFBQWE7Z0JBQzVCLG1CQUFtQixFQUFFLGtCQUFrQjtnQkFDdkMsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFdBQVcsRUFBRSxpQkFBaUI7Z0JBQzlCLGlCQUFpQixFQUFFLE1BQU07Z0JBQ3pCLGFBQWEsRUFBRSxPQUFPO2dCQUN0QixtQkFBbUIsRUFBRSxPQUFPO2dCQUM1QixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxXQUFXLEVBQUUsTUFBTTtnQkFDbkIsaUJBQWlCLEVBQUUsZ0JBQWdCO2dCQUNuQyxnQkFBZ0IsRUFBRSxjQUFjO2dCQUNoQyxpQkFBaUIsRUFB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