import { basekit, FieldType, field, FieldComponent, FieldCode } from '@lark-opdev/block-basekit-server-api';
const { t } = field;

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
basekit.addDomainList(allowedDomains);

basekit.addField({
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
      component: FieldComponent.Input,
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
      component: FieldComponent.Input,
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
    type: FieldType.Text, // 保持返回类型为文本，因为我们仍然返回AI分析结果
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
                code: FieldCode.Success,
                data: '',
            };
        }

        console.log('转换后的URLs:', urls); // 添加日志以便调试

        // 构建消息内容
        const messageContent: any[] = [
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
                    code: FieldCode.AuthorizationError,
                    message: t('errorAuthFailed'),
                    msg: `===捷径代码主动返回错误: API认证失败 ${response.status} ${errorText}`,
                };
            } else if (response.status === 429) {
                return {
                    code: FieldCode.RateLimit,
                    message: t('errorRateLimit'),
                    msg: `===捷径代码主动返回错误: 触发限流 ${response.status} ${errorText}`,
                };
            }
            return {
                code: FieldCode.Error,
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
                    code: FieldCode.Success,
                    data: "AI分析内容为空，请修改提示词重试～",
                    msg: "结果异常！"
                };
            }

            data = JSON.parse(responseText);
        } catch (error) {
            console.log("🚀 ~ execute: ~ response解析错误:", error);
            return {
                code: FieldCode.Success,
                data: "AI分析内容为空，请修改提示词重试～",
                msg: "结果异常！"
            };
        }

        // 检查API返回的错误码
        if (data.error) {
            console.log("🚀 ~ execute: ~ API返回错误:", data.error);
            
            if (data.error.code === 'rate_limit_exceeded' || data.error.type === 'rate_limit_exceeded') {
                return {
                    code: FieldCode.RateLimit,
                    msg: "超过API调用QPS限制"
                };
            } else if (data.error.code === 'insufficient_quota' || data.error.type === 'insufficient_quota') {
                return {
                    code: FieldCode.QuotaExhausted,
                    msg: "quota耗尽"
                };
            } else if (data.error.code === 'invalid_api_key' || data.error.type === 'invalid_api_key') {
                return {
                    code: FieldCode.AuthorizationError,
                    msg: "服务未开通或API Key无效"
                };
            } else {
                return {
                    code: FieldCode.InvalidArgument,
                    msg: "输入参数错误"
                };
            }
        }

        if (!data.choices?.[0]?.message?.content) {
            return {
                code: FieldCode.Success,
                data: "AI分析内容为空，请修改提示词重试～",
                msg: "结果异常！"
            };
        }

        return {
            code: FieldCode.Success,
            data: data.choices[0].message.content.trim(),
        };
    } catch (error) {
        console.log("🚀 ~ execute: ~ 整体执行错误:", error);
        return {
            code: FieldCode.Success,
            data: "AI服务异常，请稍后重试～",
            msg: "服务异常！"
        };
    }
  },
});

export default basekit;