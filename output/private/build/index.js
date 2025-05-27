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
            component: block_basekit_server_api_1.FieldComponent.FieldSelect,
            props: {
                supportType: [block_basekit_server_api_1.FieldType.Attachment],
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
        //定义固定的apikey
        const apiKey = '7d2e34f4-0995-4538-995f-b671a1d7dce9';
        const model = 'ep-20250507093817-2bw6t';
        const provider = 'volc';
        const { customModel, prompt, inputField } = formItemParams;
        const { fetch } = context;
        try {
            // 修复：使用更可靠的方式处理附件字段
            let attachmentInfo = null;
            // 检查输入字段是否为数组并包含附件内容
            if (Array.isArray(inputField) && inputField.length > 0) {
                // 获取第一个附件
                const attachment = inputField[0];
                if (attachment && attachment.tmp_url) {
                    attachmentInfo = {
                        url: attachment.tmp_url,
                        name: attachment.name,
                        size: attachment.size,
                        type: attachment.type
                    };
                }
            }
            console.log("处理的附件信息:", attachmentInfo); // 添加日志以便调试
            if (!attachmentInfo) {
                return {
                    code: block_basekit_server_api_1.FieldCode.Success,
                    data: '',
                };
            }
            // 获取图片内容并转换为base64
            const imageResponse = await fetch(attachmentInfo.url);
            if (!imageResponse.ok) {
                console.log("获取图片失败:", imageResponse.status);
                return {
                    code: block_basekit_server_api_1.FieldCode.Error,
                    data: "获取图片失败，请重试",
                    msg: "图片获取失败"
                };
            }
            // 获取图片的二进制数据
            const imageArrayBuffer = await imageResponse.arrayBuffer();
            // 将ArrayBuffer转换为Base64字符串
            // 1. 创建一个Uint8Array视图
            const uint8Array = new Uint8Array(imageArrayBuffer);
            // 2. 将每个字节转换为字符
            let binaryString = '';
            uint8Array.forEach(byte => {
                binaryString += String.fromCharCode(byte);
            });
            // 3. 使用btoa函数将二进制字符串转换为base64
            const base64Image = btoa(binaryString);
            // 确定图片MIME类型
            const mimeType = attachmentInfo.type || 'image/jpeg'; // 默认为jpeg
            const dataURI = `data:${mimeType};base64,${base64Image}`;
            console.log("图片已转换为base64格式");
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
            //const isReasonerModel = (customModel || model.value) === 'deepseek-reasoner';
            const isReasonerModel = customModel === 'deepseek-reasoner' || model === 'ep-20250507093817-2bw6t';
            const requestBody = {
                model: customModel || model,
                messages: [
                    {
                        role: 'user',
                        content: [
                            { type: 'text', text: prompt },
                            { type: 'image_url', image_url: { url: dataURI } }
                        ]
                    }
                ],
                stream: false,
                temperature: isReasonerModel ? 0 : undefined
            };
            if (!isReasonerModel) {
                requestBody.messages[0].content = [
                    { type: 'image_url', image_url: { url: dataURI } }
                ];
                requestBody.messages.unshift({ role: 'system', content: prompt });
            }
            console.log('Request Body:', JSON.stringify({ ...requestBody, messages: [{ ...requestBody.messages[0], content: "[图片内容已省略]" }] }));
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