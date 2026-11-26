const cleanHiveMapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500!2d-81.4686802!3d28.6702031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x841900be52a84a83%3A0xad74f2ded6aa23b2!2sCleanhive%20Company!5e0!3m2!1sen!2sus!4v1";

export function GoogleMap({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5 ${className}`}>
      <iframe
        title="CleanHive Company location on Google Maps"
        src={cleanHiveMapUrl}
        className="h-full min-h-[400px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
