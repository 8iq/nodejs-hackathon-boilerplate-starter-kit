// auto generated by kmigrator
// KMIGRATOR:0034_auto_20201109_2128:IyBHZW5lcmF0ZWQgYnkgRGphbmdvIDMuMS4yIG9uIDIwMjAtMTEtMDkgMjE6MjgKCmZyb20gZGphbmdvLmRiIGltcG9ydCBtaWdyYXRpb25zLCBtb2RlbHMKCgpjbGFzcyBNaWdyYXRpb24obWlncmF0aW9ucy5NaWdyYXRpb24pOgoKICAgIGRlcGVuZGVuY2llcyA9IFsKICAgICAgICAoJ19kamFuZ29fc2NoZW1hJywgJzAwMzNfYXV0b18yMDIwMTEwOF8yMjA3JyksCiAgICBdCgogICAgb3BlcmF0aW9ucyA9IFsKICAgICAgICBtaWdyYXRpb25zLkFsdGVyRmllbGQoCiAgICAgICAgICAgIG1vZGVsX25hbWU9J3Rlc3RoaXN0b3J5cmVjb3JkJywKICAgICAgICAgICAgbmFtZT0nY3JlYXRlZEJ5JywKICAgICAgICAgICAgZmllbGQ9bW9kZWxzLlBvc2l0aXZlSW50ZWdlckZpZWxkKGJsYW5rPVRydWUsIG51bGw9VHJ1ZSksCiAgICAgICAgKSwKICAgICAgICBtaWdyYXRpb25zLkFsdGVyRmllbGQoCiAgICAgICAgICAgIG1vZGVsX25hbWU9J3Rlc3RoaXN0b3J5cmVjb3JkJywKICAgICAgICAgICAgbmFtZT0naGlzdG9yeV9pZCcsCiAgICAgICAgICAgIGZpZWxkPW1vZGVscy5Qb3NpdGl2ZUludGVnZXJGaWVsZCgpLAogICAgICAgICksCiAgICAgICAgbWlncmF0aW9ucy5BbHRlckZpZWxkKAogICAgICAgICAgICBtb2RlbF9uYW1lPSd0ZXN0aGlzdG9yeXJlY29yZCcsCiAgICAgICAgICAgIG5hbWU9J3NlbGYnLAogICAgICAgICAgICBmaWVsZD1tb2RlbHMuUG9zaXRpdmVJbnRlZ2VyRmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSwKICAgICAgICApLAogICAgICAgIG1pZ3JhdGlvbnMuQWx0ZXJGaWVsZCgKICAgICAgICAgICAgbW9kZWxfbmFtZT0ndGVzdGhpc3RvcnlyZWNvcmQnLAogICAgICAgICAgICBuYW1lPSd1cGRhdGVkQnknLAogICAgICAgICAgICBmaWVsZD1tb2RlbHMuUG9zaXRpdmVJbnRlZ2VyRmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSwKICAgICAgICApLAogICAgICAgIG1pZ3JhdGlvbnMuQWx0ZXJGaWVsZCgKICAgICAgICAgICAgbW9kZWxfbmFtZT0ndGVzdGl0ZW1oaXN0b3J5cmVjb3JkJywKICAgICAgICAgICAgbmFtZT0nY3JlYXRlZEJ5JywKICAgICAgICAgICAgZmllbGQ9bW9kZWxzLlBvc2l0aXZlSW50ZWdlckZpZWxkKGJsYW5rPVRydWUsIG51bGw9VHJ1ZSksCiAgICAgICAgKSwKICAgICAgICBtaWdyYXRpb25zLkFsdGVyRmllbGQoCiAgICAgICAgICAgIG1vZGVsX25hbWU9J3Rlc3RpdGVtaGlzdG9yeXJlY29yZCcsCiAgICAgICAgICAgIG5hbWU9J2hpc3RvcnlfaWQnLAogICAgICAgICAgICBmaWVsZD1tb2RlbHMuVVVJREZpZWxkKCksCiAgICAgICAgKSwKICAgICAgICBtaWdyYXRpb25zLkFsdGVyRmllbGQoCiAgICAgICAgICAgIG1vZGVsX25hbWU9J3Rlc3RpdGVtaGlzdG9yeXJlY29yZCcsCiAgICAgICAgICAgIG5hbWU9J3Rlc3QnLAogICAgICAgICAgICBmaWVsZD1tb2RlbHMuUG9zaXRpdmVJbnRlZ2VyRmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSwKICAgICAgICApLAogICAgICAgIG1pZ3JhdGlvbnMuQWx0ZXJGaWVsZCgKICAgICAgICAgICAgbW9kZWxfbmFtZT0ndGVzdGl0ZW1oaXN0b3J5cmVjb3JkJywKICAgICAgICAgICAgbmFtZT0ndXBkYXRlZEJ5JywKICAgICAgICAgICAgZmllbGQ9bW9kZWxzLlBvc2l0aXZlSW50ZWdlckZpZWxkKGJsYW5rPVRydWUsIG51bGw9VHJ1ZSksCiAgICAgICAgKSwKICAgIF0K

exports.up = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Alter field createdBy on testhistoryrecord
--
ALTER TABLE "TestHistoryRecord" ADD CONSTRAINT "TestHistoryRecord_createdBy_85dfb4aa_check" CHECK ("createdBy" >= 0);
--
-- Alter field history_id on testhistoryrecord
--
DROP INDEX IF EXISTS "TestHistoryRecord_history_id_9e99b381";
ALTER TABLE "TestHistoryRecord" ADD CONSTRAINT "TestHistoryRecord_history_id_9e99b381_check" CHECK ("history_id" >= 0);
--
-- Alter field self on testhistoryrecord
--
ALTER TABLE "TestHistoryRecord" ADD CONSTRAINT "TestHistoryRecord_self_d09f530b_check" CHECK ("self" >= 0);
--
-- Alter field updatedBy on testhistoryrecord
--
ALTER TABLE "TestHistoryRecord" ADD CONSTRAINT "TestHistoryRecord_updatedBy_8429de21_check" CHECK ("updatedBy" >= 0);
--
-- Alter field createdBy on testitemhistoryrecord
--
ALTER TABLE "TestItemHistoryRecord" ADD CONSTRAINT "TestItemHistoryRecord_createdBy_0d7982dc_check" CHECK ("createdBy" >= 0);
--
-- Alter field history_id on testitemhistoryrecord
--
DROP INDEX IF EXISTS "TestItemHistoryRecord_history_id_3e2881da";
--
-- Alter field test on testitemhistoryrecord
--
ALTER TABLE "TestItemHistoryRecord" ADD CONSTRAINT "TestItemHistoryRecord_test_4500e1e7_check" CHECK ("test" >= 0);
--
-- Alter field updatedBy on testitemhistoryrecord
--
ALTER TABLE "TestItemHistoryRecord" ADD CONSTRAINT "TestItemHistoryRecord_updatedBy_aed0bd7a_check" CHECK ("updatedBy" >= 0);
COMMIT;

    `)
}

exports.down = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Alter field updatedBy on testitemhistoryrecord
--
--
-- Alter field test on testitemhistoryrecord
--
--
-- Alter field history_id on testitemhistoryrecord
--
CREATE INDEX "TestItemHistoryRecord_history_id_3e2881da" ON "TestItemHistoryRecord" ("history_id");
--
-- Alter field createdBy on testitemhistoryrecord
--
--
-- Alter field updatedBy on testhistoryrecord
--
--
-- Alter field self on testhistoryrecord
--
--
-- Alter field history_id on testhistoryrecord
--
CREATE INDEX "TestHistoryRecord_history_id_9e99b381" ON "TestHistoryRecord" ("history_id");
--
-- Alter field createdBy on testhistoryrecord
--
COMMIT;

    `)
}