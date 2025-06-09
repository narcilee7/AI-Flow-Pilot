// core-vectors/chroma.ts
import { ChromaClient } from 'chromadb';

const client = new ChromaClient({ path: 'http://localhost:8000' });

export async function upsertDocument({
  collection,
  id,
  text,
  metadata,
}: {
  collection: string;
  id: string;
  text: string;
  metadata: Record<string, any>;
}) {
  const col = await client.getOrCreateCollection({ name: collection });
  await col.upsert({ ids: [id], documents: [text], metadatas: [metadata] });
}

export async function queryRelevant({
  collection,
  text,
}: {
  collection: string;
  text: string;
}) {
  const col = await client.getCollection({ name: collection });
  return await col.query({ queryTexts: [text], nResults: 5 });
}
