// ============================================================
//  SUGGESTION HUB — BA — Philosophy
//
//  examDate -> "YYYY-MM-DD" (e.g. "2026-10-15"), or "" if not announced yet.
//              Shows the exam date + a countdown on the subject card.
//  status   -> "pending"  = suggestions not uploaded yet (shows "Coming Soon")
//              "ready"    = suggestions are uploaded and live (shows "Ready")
//
//  Two lists below:
//    "suggestions"  -> exam-focused suggestion sets
//    "materials"    -> study materials (PDF notes or YouTube videos)
//
//  For each item:
//    title -> what shows on the site
//    type  -> "pdf" or "youtube"
//    url   -> the link (Google Drive / YouTube / or a PDF you uploaded
//             into this repo, e.g. "files/ba/philosophy/chapter1.pdf")
// ============================================================

const BA_PHILOSOPHY = {
  name: "Philosophy",
  icon: "🧠",
  examDate: "",
  status: "pending",
  suggestions: [
    // Example -- delete or replace this once you add real items:
    // { title: "Suggestion — Unit 1", type: "pdf", url: "https://drive.google.com/..." }
       { title: "Suggestion — Philosophy", type: "pdf", url: "https://drive.google.com/drive/folders/13I8hmuv1wU7N_AbOHla9W4VGTfWfYV6k"}
  ],
  materials: [
    // Example -- delete or replace this once you add real items:
    // { title: "Chapter 1 Notes", type: "pdf", url: "https://drive.google.com/..." },
    // { title: "Chapter 1 Explained", type: "youtube", url: "https://youtube.com/..." }
  ]
};
