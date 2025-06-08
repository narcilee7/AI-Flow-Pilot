import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from '@koa/bodyparser';
import Router from '@koa/router';
import { HfInference } from '@huggingface/inference';

const app = new Koa();
const router = new Router();
const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

// 中間件
app.use(cors());
app.use(bodyParser());

// 路由
router.get('/health', (ctx) => {
  ctx.body = { status: 'ok' };
});

router.post('/generate', async (ctx) => {
  try {
    const { prompt } = ctx.request.body;
    if (!prompt) {
      ctx.status = 400;
      ctx.body = { error: 'Prompt is required' };
      return;
    }

    const result = await hf.textGeneration({
      model: 'gpt2',
      inputs: prompt,
      parameters: {
        max_length: 100,
        temperature: 0.7,
      },
    });

    ctx.body = { result: result.generated_text };
  } catch (error) {
    console.error('AI generation error:', error);
    ctx.status = 500;
    ctx.body = { error: 'Failed to generate text' };
  }
});

// 使用路由
app.use(router.routes()).use(router.allowedMethods());

// 錯誤處理
app.on('error', (err, ctx) => {
  console.error('Server error', err, ctx);
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`AI service is running on port ${port}`);
});
