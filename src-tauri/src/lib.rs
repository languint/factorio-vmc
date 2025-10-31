mod commands;

use commands::fullscreen;

pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![fullscreen::toggle_fullscreen])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
