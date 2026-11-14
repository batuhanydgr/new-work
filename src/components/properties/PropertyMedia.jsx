import { FileText, MapPin, Video } from "lucide-react";

function getVideoEmbedUrl(url) {
  const youtubeId = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/,
  )?.[1];
  if (youtubeId) return `https://www.youtube-nocookie.com/embed/${youtubeId}`;

  const vimeoId = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1];
  if (vimeoId) return `https://player.vimeo.com/video/${vimeoId}`;

  return null;
}

export default function PropertyMedia({ property }) {
  const mapQuery = property.coordinates?.length === 2
    ? property.coordinates.join(",")
    : `${property.district}, ${property.city}`;
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
  const videoEmbedUrl = property.videoUrl ? getVideoEmbedUrl(property.videoUrl) : null;
  const isDirectVideo = property.videoUrl && /\.(mp4|webm|ogg)(?:$|[?#])/i.test(property.videoUrl);

  return (
    <section className="mt-12" aria-label="İlan medyası ve konumu">
      {property.videoUrl || property.tourUrl || property.floorPlanUrl ? (
        <div className="grid gap-8 md:grid-cols-2">
          {property.videoUrl ? (
            <div>
              <h2 className="font-display text-3xl text-ink">Video turu</h2>
              {isDirectVideo ? (
                <video
                  src={property.videoUrl}
                  controls
                  playsInline
                  className="mt-5 aspect-video w-full bg-ink"
                >
                  Tarayıcınız video oynatmayı desteklemiyor.
                </video>
              ) : videoEmbedUrl ? (
                <iframe
                  title={`${property.title} video turu`}
                  src={videoEmbedUrl}
                  className="mt-5 aspect-video w-full bg-ink"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <a
                  href={property.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 border border-mist px-5 py-4 text-sm text-ink hover:border-bronze"
                >
                  <Video size={18} className="text-bronze" />
                  Video turunu aç
                </a>
              )}
            </div>
          ) : null}
          {property.tourUrl ? (
            <div>
              <h2 className="font-display text-3xl text-ink">360° sanal tur</h2>
              <iframe
                title={`${property.title} 360 derece sanal turu`}
                src={property.tourUrl}
                className="mt-5 aspect-video w-full bg-ink"
                allow="fullscreen; gyroscope; accelerometer"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : null}
          {property.floorPlanUrl ? (
            <div>
              <h2 className="font-display text-3xl text-ink">Kat planı</h2>
              <a
                href={property.floorPlanUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-3 border border-mist bg-cream px-5 py-4 text-sm text-ink transition-colors hover:border-bronze"
              >
                <FileText size={20} className="text-bronze" />
                Kat planını görüntüle (PDF / görsel)
              </a>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="mt-12">
        <div className="flex items-center gap-3">
          <MapPin size={20} strokeWidth={1.5} className="text-bronze" />
          <div>
            <h2 className="font-display text-3xl text-ink">Konum</h2>
            <p className="mt-1 text-sm text-stone">
              {property.coordinates ? "Haritada işaretlenen konum" : "Bölge haritası · Yaklaşık konum"}
            </p>
          </div>
        </div>
        <div className="mt-5 overflow-hidden border border-mist bg-mist">
          <iframe
            title={`${property.title} konum haritası`}
            src={mapUrl}
            className="h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
