use std::path::PathBuf;

use serde::{Deserialize, Serialize};

use crate::mod_info::ModInfo;

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct Project {
    pub mod_info: ModInfo,
    pub path: PathBuf,
}