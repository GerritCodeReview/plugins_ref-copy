load("//tools/bzl:plugin.bzl", "gerrit_plugin")

gerrit_plugin(
    name = "ref-copy",
    srcs = glob(["src/main/java/**/*.java"]),
    manifest_entries = [
        "Gerrit-PluginName: ref-copy",
        "Gerrit-Module: com.googlesource.gerrit.plugins.refcopy.Module",
        "Implementation-Title: Ref Copy Plugin",
    ],
    resources = glob(["src/main/**/*"]),
    resource_jars = ["//plugins/ref-copy/ref-copy:ref-copy-ui"],
)
