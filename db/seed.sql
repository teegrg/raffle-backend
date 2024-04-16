\c raffle;

INSERT INTO raffles (name, created_at, key, winner_id, raffled_on ) VALUES 
('waytogo', CURRENT_TIMESTAMP, 'asdfg1', null, null),
('lets do it', CURRENT_TIMESTAMP, 'a3dfg1', null, null),
('there yet', CURRENT_TIMESTAMP, 'a45dfg1', null, null),
('got this',  CURRENT_TIMESTAMP, 'as5fg1', null, null),
('give me hundis', CURRENT_TIMESTAMP, 'aoo1fg1', null, null);

INSERT INTO users (first_name, last_name, email, phone, raffle_id, created_at)
VALUES 
('Tshokey', 'Wangmo', 'tshokey@gmail.com', '606-508-7596', 1, CURRENT_TIMESTAMP),
('Rayden', 'Nyeshang', 'ray@gmail.com', '646-508-9596', 2, CURRENT_TIMESTAMP),
('Sonnie', 'Red', 'red@gmail.com', '347-508-4596', 3, CURRENT_TIMESTAMP),
('Sangyel', 'Tashi', 'tashi@gmail.com', '246-008-7396', 4, CURRENT_TIMESTAMP),
('Wangchen', 'Dolma', 'wangchen@gmail.com', '346-518-7596', 5, CURRENT_TIMESTAMP);

-- psql -U postgres -f db/schema.sql
-- //psql -U postgres -f db/seed.sql