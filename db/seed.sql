\c raffle;

INSERT INTO users (first_name, last_name, email, phone, created_at)
VALUES 
('Tshokey', 'Wangmo', 'tshokey@gmail.com', '606-508-7596', CURRENT_TIMESTAMP),
('Rayden', 'Nyeshang', 'ray@gmail.com', '646-508-9596', CURRENT_TIMESTAMP),
('Sonnie', 'Red', 'red@gmail.com', '347-508-4596', CURRENT_TIMESTAMP),
('Sangyel', 'Tashi', 'tashi@gmail.com', '246-008-7396', CURRENT_TIMESTAMP),
('Wangchen', 'Dolma', 'wangchen@gmail.com', '346-518-7596', CURRENT_TIMESTAMP);

INSERT INTO raffles (name, user_id, created_at, key ) VALUES 
('waytogo', 1, CURRENT_TIMESTAMP, 'asdfg1'),
('lets do it', 2,  CURRENT_TIMESTAMP, 'a3dfg1'),
('there yet', 3, CURRENT_TIMESTAMP, 'a45dfg1'),
('got this', 4,  CURRENT_TIMESTAMP, 'as5fg1'),
('give me hundis', 1, CURRENT_TIMESTAMP, 'aoo1fg1');

INSERT INTO winner (winner_id) VALUES 
(null),
(null),
(null),
(null),
(null);

-- psql -U postgres -f db/schema.sql
-- //psql -U postgres -f db/seed.sql