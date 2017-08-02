class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        return dirtyFileName.match(/\_(.*)\./)[1];
    }
}
