load("//tools/bzl:plugin.bzl", "gerrit_plugin")
load("//tools/bzl:js.bzl", "gerrit_js_bundle")

gerrit_plugin(
    name = "ref-copy",
    srcs = glob(["src/main/java/**/*.java"]),
    manifest_entries = [
        "Gerrit-PluginName: ref-copy",
        "Gerrit-Module: com.googlesource.gerrit.plugins.refcopy.Module",
        "Implementation-Title: Ref Copy Plugin",
    ],
    resources = glob(["src/main/**/*"]),
    resource_jars = [":ref-copy-ui"],
)

gerrit_js_bundle(
    name = "ref-copy-ui",
    srcs = glob(["ref-copy/*.js"]),
    entry_point = "ref-copy/plugin.js",
)
