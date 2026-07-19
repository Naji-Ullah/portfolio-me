// Maps a skill label from INSTRUMENTS to the projects whose tag list
// contains it — skills become provenance queries, not claims.
// Labels that never appear in any project's tags simply aren't clickable.

const KEYS = {
  "Redux Toolkit / Saga": ["redux"],
  "Django REST Framework": ["drf"],
  "Firebase - Firestore, Auth, Functions": ["firebase"],
  "REST APIs": ["api"],
};

function tokens(tag) {
  return tag.toLowerCase().split(/[^a-z0-9.+#]+/);
}

export function projectsForSkill(label, projects) {
  const keys = KEYS[label] ?? [label.toLowerCase()];
  return projects.filter((p) =>
    p.tags.some((t) => {
      const lt = t.toLowerCase();
      return keys.some((k) => lt === k || tokens(t).includes(k));
    })
  );
}
