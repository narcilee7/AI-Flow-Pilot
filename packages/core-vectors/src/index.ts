import { ChromaClient, Collection } from 'chromadb';

const client = new ChromaClient();

export async function initVectorCollection(name: string): Promise<Collection> {
  return await client.getOrCreateCollection({ name });
}

export async function addToCollection(collection: Collection, docs: { id: string; text: string }[]) {
  await collection.add({
    ids: docs.map(d => d.id),
    documents: docs.map(d => d.text),
  });
}

export async function searchCollection(collection: Collection, query: string) {
  return await collection.query({ queryTexts: [query], nResults: 3 });
}