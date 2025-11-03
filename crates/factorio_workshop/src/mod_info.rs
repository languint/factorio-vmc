use serde::{Deserialize, Serialize};

/// A struct representing the values present in Factorio mod's `info.json`
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct ModInfo {
    pub name: String,
    pub version: String,
    pub title: String,
    pub author: String,
    pub factorio_version: String,
    pub dependencies: Vec<String>,
}
