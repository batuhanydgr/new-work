export function photo(id, width = 1800) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;
}

export function portrait(id) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80&crop=faces`;
}
