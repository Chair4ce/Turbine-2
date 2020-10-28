CREATE TABLE app_visits
(
    id           INT(11)     NOT NULL AUTO_INCREMENT,
    time_visited VARCHAR(64) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE site
(
    id   INT(11)     NOT NULL AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY unique_site_name (name)
);

CREATE TABLE squadron
(
    id      INT(11)     NOT NULL AUTO_INCREMENT,
    name    VARCHAR(64) NOT NULL,
    site_id INT(11) DEFAULT NULL,
    PRIMARY KEY (id),
    KEY site_id (site_id),
    CONSTRAINT squadron_ibfk_1 FOREIGN KEY (site_id) REFERENCES site (id)
);

CREATE TABLE work_center
(
    id          INT(11)     NOT NULL AUTO_INCREMENT,
    squadron_id INT(11)     NOT NULL,
    name        VARCHAR(64) NOT NULL,
    PRIMARY KEY (id),
    KEY squadron_id (squadron_id),
    CONSTRAINT work_center_ibfk_1 FOREIGN KEY (squadron_id) REFERENCES squadron (id)
);

CREATE TABLE grade
(
    id           INT(11)     NOT NULL AUTO_INCREMENT,
    abbreviation VARCHAR(64) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY unique_grade (abbreviation)
);

CREATE TABLE airman
(
    id             INT(11)     NOT NULL AUTO_INCREMENT,
    first_name     VARCHAR(64) NOT NULL,
    last_name      VARCHAR(64) NOT NULL,
    grade_id        INT(11) DEFAULT NULL,
    work_center_id INT(11) DEFAULT NULL,
    PRIMARY KEY (id),
    KEY work_center_id (work_center_id),
    CONSTRAINT fk_grade_id FOREIGN KEY (grade_id) REFERENCES grade (id),
    CONSTRAINT airman_ibfk_2 FOREIGN KEY (work_center_id) REFERENCES work_center (id)
);

INSERT INTO grade (id, abbreviation)
VALUES (1, 'No Grade'),
       (2, 'AB'),
       (3, 'Amn'),
       (4, 'A1C'),
       (5, 'SrA'),
       (6, 'SSgt'),
       (7, 'TSgt'),
       (8, 'MSgt'),
       (9, 'SMSgt'),
       (10, '2d Lt'),
       (11, '1st Lt'),
       (12, 'Capt'),
       (13, 'Maj'),
       (14, 'Lt Col'),
       (15, 'Col');

INSERT INTO site
VALUES (1, 'DGS-1'),
       (2, 'DGS-2'),
       (3, 'DGS-3'),
       (4, 'DGS-4'),
       (5, 'DGS-5'),
       (6, '480'),
       (7, 'DGS-AR'),
       (8, 'DGS-AL'),
       (9, 'DGS-IN'),
       (10, 'DGS-KS'),
       (11, 'DGS-MA'),
       (12, 'DGS-NV'),
       (13, 'DMS-GA'),
       (15, 'DMS-GE'),
       (16, 'DMS-HI'),
       (14, 'DMS-MD'),
       (17, 'DMS-TX'),
       (18, 'DMS-UT');

INSERT INTO squadron
VALUES (1, '30 IS', 1),
       (2, '45 IS', 1),
       (3, '13 IS', 2),
       (4, '9 IS', 2),
       (5, '6 IS', 3),
       (6, '24 IS', 4),
       (7, '8 IS', 5),
       (8, '480 IS', 6),
       (9, '123 IS', 7),
       (10, '117 IS', 8),
       (11, '137 IS', 9),
       (12, '161 IS', 10),
       (13, '101 IS', 11),
       (14, '152 IS', 12),
       (15, '3 IS', 13),
       (16, '94 IS', 14),
       (17, '402 IS', 15),
       (18, '324 IS', 16),
       (19, '531 IS', 17),
       (20, '169 IS', 18),
       (21, '303 IS', 3);


