PGDMP     2                    y         	   apiTaller    13.2    13.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16846 	   apiTaller    DATABASE     j   CREATE DATABASE "apiTaller" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE "apiTaller";
                postgres    false            �            1259    16850 
   estudiante    TABLE     �   CREATE TABLE public.estudiante (
    id_estudiante integer NOT NULL,
    edad integer,
    ciudad character varying(25),
    puntaje integer
);
    DROP TABLE public.estudiante;
       public         heap    postgres    false            �          0    16850 
   estudiante 
   TABLE DATA           J   COPY public.estudiante (id_estudiante, edad, ciudad, puntaje) FROM stdin;
    public          postgres    false    200   �       !           2606    16857    estudiante estudiante_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.estudiante
    ADD CONSTRAINT estudiante_pkey PRIMARY KEY (id_estudiante);
 D   ALTER TABLE ONLY public.estudiante DROP CONSTRAINT estudiante_pkey;
       public            postgres    false    200            �     x�]W��$7�[c��Tj���:Y��{�}�����i��0��T��M�_ү�_��~���~1K�9/�ח��޾�|�q��.�o?_���v1��E����Ͽa�riM.��G4�^L��yi�#o���7j^rq����!Nmev����}�H�����5�u�"�FR��F+���B��~���k"e���x�������e�p+���YE��̀!Rם�P4�#ľe�W*�'�]�]K<RR�n��mÊ'��.7=[6���;�wn"����'���{ڐ�{��JChFd,O�H3)J�M�Ԯ�������~x2$)���h��J��Gֹ�,H��]Wڏ+cpS*�q��rz��g�*���-�T�5Eּ3R�MmwV3��~z`F��1����v3\��yg��ʣ�g�NP=�K�H��ن�Auŝ��]�4n�j�y�ُg��ڈu�&�@�|���#��QԜp*�q�fG�.�L�h�#M�ۑs���l���W���h%�H7��66���`H�9U\�a��)���.o�+7ל���>
����e���;��9bh�����<�u����>*3�l����>R9�\���ʌL-*S���2���^Jf$Qp��M�@9ξ��,�<�e��B���#7��ls����c�xC�4W���Px^�Q�cFFߜ/ܠ���$Pu_�xW
�N�F�8�t����p�BY�,�x�(����.�Ve,	�/�.��=v#��^{.dO�����:y�_�	�t�,@'Oy�T �2��i;J��vs�%�R���Ma�X%�Y�1��ȸ����`a�r� N������#�l���$���ʳ��p�r�X��b�/�s��=��	N�C�8ϨL�O IN�	.CD7U��=���b("Z^����	q���E(�+����dqϦ���c�#�T���R�8�􀠁~A���C�r	��A!=�
��O�:BPԓ$s��Z�:#���'�0d�l�X(�zF��6�OB�:t2A�y�c������ҕ���F�����<�e����OjƞT=Ÿ@y8��B[J���<�c"���U�a�%��hCpOD��- }(�Z;{IC�NeA�%���:�gug�� ~~gx����EZ�Vf%�x��W�gm�( ��f]ar���!*��(T:`�upbm�O��q-M�=|��a2�C}w
M���U�3`��Hù'G���=t�'�-Ar��]��<�����<�@z.��.�
&�����	5i}�f⑟73
�, ��Z����     