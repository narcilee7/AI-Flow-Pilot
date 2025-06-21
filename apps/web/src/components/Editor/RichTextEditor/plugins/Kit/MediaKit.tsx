'use client'

import {
  AudioPlugin,
  FilePlugin,
  ImagePlugin,
  MediaEmbedPlugin,
  PlaceholderPlugin,
  VideoPlugin,
} from '@platejs/media/react';
import { KEYS } from 'platejs';

// import { AudioElement } from '@/components/ui/media-audio-node';
import { AudioElement } from '@/components/Editor/RichTextEditor/SubComponents/AudioElement';
// import { MediaEmbedElement } from '@/components/ui/media-embed-node';
import { FileElement } from '@/components/Editor/RichTextEditor/SubComponents/FileElement';
import { ImageElement } from '@/components/Editor/RichTextEditor/SubComponents/ImageElement';
import { PlaceholderElement } from '@/components/Editor/RichTextEditor/SubComponents/PlaceholderElement';
import { MediaPreviewDialog } from '@/components/Editor/RichTextEditor/SubComponents/MediaPreviewDialog';
import { CaptionPlugin } from '@platejs/caption/react';
import { MediaUploadToast } from '@/components/Editor/RichTextEditor/SubComponents/MediaUploadToast';
// import { VideoElement } from '@/components/ui/media-video-node';

export const MediaKit = [
  // 图片插件
  ImagePlugin.configure({
    options: { disableUploadInsert: true },
    render: { afterEditable: MediaPreviewDialog, node: ImageElement },
  }),
  // MediaEmbedPlugin.withComponent(MediaEmbedElement),
  // VideoPlugin.withComponent(VideoElement),
  AudioPlugin.withComponent(AudioElement),
  FilePlugin.withComponent(FileElement),
  PlaceholderPlugin.configure({
    options: { disableEmptyPlaceholder: true },
    render: { afterEditable: MediaUploadToast, node: PlaceholderElement },
  }),
  CaptionPlugin.configure({
    options: {
      query: {
        allow: [KEYS.img, KEYS.video, KEYS.audio, KEYS.file, KEYS.mediaEmbed],
      },
    },
  }),
];
