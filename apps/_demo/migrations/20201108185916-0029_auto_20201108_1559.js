// auto generated by kmigrator
// KMIGRATOR:0029_auto_20201108_1559:IyBHZW5lcmF0ZWQgYnkgRGphbmdvIDMuMS4yIG9uIDIwMjAtMTEtMDggMTU6NTkKCmZyb20gZGphbmdvLmRiIGltcG9ydCBtaWdyYXRpb25zLCBtb2RlbHMKCgpjbGFzcyBNaWdyYXRpb24obWlncmF0aW9ucy5NaWdyYXRpb24pOgoKICAgIGRlcGVuZGVuY2llcyA9IFsKICAgICAgICAoJ19kamFuZ29fc2NoZW1hJywgJzAwMjhfYXV0b18yMDIwMTEwOF8wOTU1JyksCiAgICBdCgogICAgb3BlcmF0aW9ucyA9IFsKICAgICAgICBtaWdyYXRpb25zLkFkZEZpZWxkKAogICAgICAgICAgICBtb2RlbF9uYW1lPSd0ZXN0JywKICAgICAgICAgICAgbmFtZT0nbWV0YVN0cmluZycsCiAgICAgICAgICAgIGZpZWxkPW1vZGVscy5KU09ORmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSwKICAgICAgICApLAogICAgICAgIG1pZ3JhdGlvbnMuQWRkRmllbGQoCiAgICAgICAgICAgIG1vZGVsX25hbWU9J3Rlc3RoaXN0b3J5cmVjb3JkJywKICAgICAgICAgICAgbmFtZT0nbWV0YVN0cmluZycsCiAgICAgICAgICAgIGZpZWxkPW1vZGVscy5KU09ORmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSwKICAgICAgICApLAogICAgXQo=

exports.up = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Add field metaString to test
--
ALTER TABLE "Test" ADD COLUMN "metaString" jsonb NULL;
--
-- Add field metaString to testhistoryrecord
--
ALTER TABLE "TestHistoryRecord" ADD COLUMN "metaString" jsonb NULL;
COMMIT;

    `)
}

exports.down = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Add field metaString to testhistoryrecord
--
ALTER TABLE "TestHistoryRecord" DROP COLUMN "metaString" CASCADE;
--
-- Add field metaString to test
--
ALTER TABLE "Test" DROP COLUMN "metaString" CASCADE;
COMMIT;

    `)
}
